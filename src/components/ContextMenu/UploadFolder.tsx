import { forwardRef, ForwardedRef } from "react";

const UploadFolder = forwardRef(
  (_, inputRef: ForwardedRef<HTMLInputElement | null>) => {
    return (
      <input
        ref={inputRef}
        type="file"
        style={{ display: "none" }}
        {...({
          webkitdirectory: "",
          directory: "",
        } as any)}
      />
    );
  }
);

export default UploadFolder;
