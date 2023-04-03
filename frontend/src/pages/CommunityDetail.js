import { useParams } from "react-router-dom";

const CommunityDetail = () => {
  const { id } = useParams();
  return <div>{id} 상세 페이지</div>;
};

export default CommunityDetail;
