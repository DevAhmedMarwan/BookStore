import loadingJson from "@/assets/Loading/circle-loader.json";
import Lottie from "lottie-react";
const Loading = ({ loading }) => {
  return (
    <div>
      {loading && (
        <div className="flex justify-center my-6">
          <Lottie
            animationData={loadingJson}
            loop
            style={{ width: 120, height: 120 }}
          />
        </div>
      )}
    </div>
  );
};

export default Loading;
