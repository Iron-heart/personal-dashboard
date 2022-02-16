import { Editor } from "@tinymce/tinymce-react";
import { Typography } from "@mui/material";

export default function Drafts() {
  const handleEditorChange = (e: any) => {
    console.log("Content was updated:", e.target.getContent());
  };

  return (
    <>
      <Typography mb={1} variant="h5">Drafts</Typography>
      <Editor
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: false,
          skin: "material-classic",
          content_css: [
            "material-classic",
            "//www.tiny.cloud/css/codepen.min.css",
          ],
          icons: "material",
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help",
        }}
        onChange={handleEditorChange}
      />
    </>
  );
}
