import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledDetailCard = styled.div`
  width: 640px;
  height: 380px;

  background-color: #212529;

  overflow: hidden;
  border-radius: 8px;

  display: flex;
`;

const StyledImageWrapper = styled.div`
  width: 30%;
  height: 100%;

  margin-right: 3%;

  overflow: hidden;
`;

const StyledInfoWrapper = styled.div`
  width: 67%;
  height: 100%;

  color: white;

  position: relative;
`;

const StyledScrollBarDiv = styled.div`
  width: 95%;
  height: 90px;
  overflow: auto;
  font-size: 11px;
  margin-top: 5px;

  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border-width: 2px;
    border-color: rgb(255 255 255/1);
    background-color: rgb(126 155 255/0.4);
  }
`;

const DetailCard = () => {
  const navigate = useNavigate();
  return (
    <StyledDetailCard className="DetailCard">
      <StyledImageWrapper>
        <img
          src="https://cdn.lol.ps/assets/img/champion-loading/45.webp"
          style={{ width: "100%", height: "100%", transform: "scale(1.1)" }}
        />
      </StyledImageWrapper>
      <StyledInfoWrapper>
        <h2 style={{ width: "100%" }}>베이가</h2>
        <table style={{ width: "90%" }}>
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "20%" }} />
          </colgroup>
          <tbody>
            <tr style={{ fontSize: "12px" }}>
              <td />
              <td style={{ textAlign: "right" }}>2023.04.06</td>
              <td />
              <td style={{ textAlign: "right" }}>2023.04.07</td>
              <td />
            </tr>
            <tr>
              <td style={{ fontSize: "14px" }}>승률</td>
              <td style={{ textAlign: "right", fontSize: "20px" }}>50.0%</td>
              <td style={{ textAlign: "right" }}>→</td>
              <td style={{ textAlign: "right", fontSize: "20px" }}>52.3%</td>
              <td
                style={{
                  textAlign: "right",
                  color: "#039773",
                  fontWeight: "bold",
                }}
              >
                ↑ 2.3%
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "14px" }}>픽률</td>
              <td style={{ textAlign: "right", fontSize: "20px" }}>5.3%</td>
              <td style={{ textAlign: "right" }}>→</td>
              <td style={{ textAlign: "right", fontSize: "20px" }}>4.7%</td>
              <td
                style={{
                  textAlign: "right",
                  color: "#FF5D5B",
                  fontWeight: "bold",
                }}
              >
                ↓ 0.6%
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "14px" }}>밴율</td>
              <td style={{ textAlign: "right", fontSize: "20px" }}>13.6%</td>
              <td style={{ textAlign: "right" }}>→</td>
              <td style={{ textAlign: "right", fontSize: "20px" }}>20.4%</td>
              <td
                style={{
                  textAlign: "right",
                  color: "#039773",
                  fontWeight: "bold",
                }}
              >
                ↑ 6.8%
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ fontSize: "12px", marginTop: "20px" }}>
          주목해야 할 포인트
        </div>
        <StyledScrollBarDiv>
          Q - 금고 부수기
          <br />
          최소 물리 피해량: 55/80/105/130/155 (+추가 공격력의 70%) ⇒
          45/70/95/120/145 (+추가 공격력의 80%)
          <br />
          최대 물리 피해량: 110/160/210/260/310 (+추가 공격력의 140%) ⇒
          90/140/190/240/290 (+추가 공격력의 160%)
          <br />
          <br />E - 끈질긴 힘
          <br />
          물리 피해량: 10/30/50/70/90 (+공격력의 110%) (+주문력의 90%) ⇒
          5/20/35/50/65 (+공격력의 120%) (+주문력의 100%)
        </StyledScrollBarDiv>
        <button
          style={{
            position: "absolute",
            right: "5%",
            border: "none",
            borderRadius: "5px",
            fontSize: "14px",
            paddingTop: "6px",
            paddingBottom: "6px",
            marginTop: "5px",
          }}
          onClick={() => {
            navigate("/1");
          }}
        >
          챔피언 상세정보 →
        </button>
      </StyledInfoWrapper>
    </StyledDetailCard>
  );
};

export default DetailCard;
