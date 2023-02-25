import "./ImageBox.css";

const ImageBox = () => {
  return (
    <div className="searchbox-wrap">
      <input type="text" placeholder="Image Link Here" />
      <button type="submit">
        <span>CATCH</span>
      </button>
    </div>
  );
};

export default ImageBox;
