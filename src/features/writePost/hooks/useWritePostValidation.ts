import { constants } from "@/config";
import { OutputData } from "@editorjs/editorjs";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

const VALIDATION_MESSAGES = {
  imageSize: "Image size must be smaller than 5 MB",
  imageFormat: "Image must be jpeg format",
  category: "Choose category",
  title: "Enter post title",
  content: "Content must have at least 1 block",
} as const;

interface useWritePostValidation {
  title: string;
  content: OutputData | null;
  categoryId: string;
  image: File | null;
  setImage: (image: File | null) => void;
}

export const useWritePostValidation = ({
  title,
  content,
  categoryId,
  image,
  setImage,
}: useWritePostValidation) => {
  const [errors, setErrors] = useState<string[]>([]);

  const validateForm = useCallback(() => {
    const newErrors: string[] = [];

    if (image instanceof File) {
      if (image.size > constants.MAX_IMAGE_SIZE) {
        toast.error(VALIDATION_MESSAGES.imageSize);
        setImage(null);
        newErrors.push(VALIDATION_MESSAGES.imageSize);
        return false;
      }

      if (!["image/jpeg"].includes(image.type)) {
        toast.error(VALIDATION_MESSAGES.imageFormat);
        setImage(null);
        newErrors.push(VALIDATION_MESSAGES.imageFormat);
        return false;
      }
    }

    if (categoryId === "default0") {
      toast.error(VALIDATION_MESSAGES.category);
      newErrors.push(VALIDATION_MESSAGES.category);
      return false;
    }

    if (!title.trim()) {
      toast.error(VALIDATION_MESSAGES.title);
      newErrors.push(VALIDATION_MESSAGES.title);
      return false;
    }

    if (!content?.blocks?.length) {
      toast.error(VALIDATION_MESSAGES.content);
      newErrors.push(VALIDATION_MESSAGES.content);
      return false;
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  }, [title, content, categoryId, image, setImage]);

  return {
    validateForm,
    errors,
  };
};
