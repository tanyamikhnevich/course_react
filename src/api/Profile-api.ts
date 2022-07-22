import { PhotosType, ProfileType } from "../Types/types";
import { instance, ResponseType} from "./api";

type SavePhotoType = { photos: PhotosType };

export const profileAPI = {
  getProfile(userId = 2) {
    return instance
      .get<ProfileType>(`profile/` + userId)
      .then((res) => res.data);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/` + userId).then((res) => res.data);
  },
  updateStatus(status: string) {
    return instance
      .put<ResponseType>(`profile/status/`, {
        status: status,
      })
      .then((res) => res.data);
  },
  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put<ResponseType<SavePhotoType>>(
      `profile/photo`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  },
  saveProfile(profile: ProfileType) {
    return instance
      .put<ResponseType<ProfileType>>(`profile`, profile)
      .then((res) => res.data);
  },
};
