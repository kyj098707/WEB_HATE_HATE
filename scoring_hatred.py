import pandas as pd
import re
import json
import os
from transformers import TextClassificationPipeline, BertForSequenceClassification, AutoTokenizer
import transformers


def get_model_tokenizer():
    model_name = 'smilegate-ai/kor_unsmile'
    model = BertForSequenceClassification.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    return model, tokenizer


def find_hatred_score(scores,model,tokenizer,sentence):
    pipe = TextClassificationPipeline(
        model=model,
        tokenizer=tokenizer,
        device = 0,   # cpu: -1, gpu: gpu number
        top_k=None,
        function_to_apply='sigmoid'
    )

    label_encoder =\
        {
        "악플/욕설": "bad",
        "남성": "man",
        "여성/가족": "woman",
        "clean": "clean",
        "성소수자": "minority",
        "종교": "religion",
        "기타 혐오": "etc_hatred",
        "인종/국적": "race",
        "연령": "age",
        "지역": "region"
         }

    for result in pipe(sentence)[0]:
        label = label_encoder[result["label"]]
        if scores.get(result["label"]):
            scores[label] += result["score"]
        else:
            scores[label] = result["score"]
    return scores


if __name__ == "__main__":
    # bs: 부산, bg: 부경, us: 울산, ds: 동서, da: 동아, bf: 부산외대, gs: 고신대
    univ_list = {"bs","bg","us","ds","da","bf","gs"}
    for univ_path in [f"./dataset/{univ}.txt" for univ in univ_list]:

        file = open(univ_path, "r", encoding="utf-8")
        data = file.readlines()
        data = [re.sub("\ +", " ", d) for d in data]
        data = [re.sub("[^ 가-힣A-Za-z]", "", d).strip() for d in data]

        stopwords = ["분 전","공감","스크랩"]
        dic = {}
        cnt = 1
        dic[cnt] = ""
        for d in data:
            if not d:
                continue
            if any([word in d for word in stopwords]):
                continue
            if len(dic[cnt]) > 200:
                cnt += 1
                dic[cnt] = ""
                continue
            dic[cnt] += f" {d}"

        model, tokenizers = get_model_tokenizer()
        scores = {}
        _, _univ = os.path.split(univ_path)

        for prompt in dic.values():
            scores = find_hatred_score(scores,model, tokenizers,prompt)
        with open(f'./results/{_univ.split(".")[0]}.json', 'w',encoding="utf-8") as f:
            json.dump(scores, f, ensure_ascii=False, indent=4)

        print(f"{univ_path} 대학교 이름")
        print(sorted(scores.items(),key=lambda x:-x[1]))

