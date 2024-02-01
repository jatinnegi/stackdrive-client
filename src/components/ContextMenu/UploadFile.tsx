import { forwardRef, ForwardedRef } from "react";

const UploadFile = forwardRef(
  (_, inputRef: ForwardedRef<HTMLInputElement | null>) => {
    return (
      <input ref={inputRef} type="file" style={{ display: "none" }} multiple />
    );
  }
);

export default UploadFile;
