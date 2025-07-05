import { toast } from "sonner";
export const handleTel = (e: React.SyntheticEvent) => {
  const input = e.target as HTMLInputElement;
  input.value = input.value.replace(/[^0-9+]/g, "");
};

export const fallbackImage = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = "/upload/temp.jpg";
};

export const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (!file) {
    toast.error("No file selected",{
        position:"top-center"
    });
    return false;
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {  
    toast.error("Only JPG, PNG, or WEBP files are allowed.", {
        position:"top-center"
    });
    e.target.value = "";
    return false;
  }

  const maxSizeInBytes = 2 * 1024 * 1024;
  if (file.size > maxSizeInBytes) {
    toast.error("Image must be less than 2MB.",{
        position:"top-center"
    });
    e.target.value = "";
    return false;
  }

  return true;
};

export const successDeleteToast = () => {
  toast.success("Successfully Deleted!",{
    position:"top-center"
  })
}
export const failedDeleteToast = () => {
  toast.success("Failed to Deleted!",{
    position:"top-center"
  })
}
