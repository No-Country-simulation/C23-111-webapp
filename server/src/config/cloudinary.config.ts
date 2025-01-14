import { v2 as cloudinary } from "cloudinary";
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "./dotenv.config";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = (buffer: Buffer, folder: string): Promise<{ secure_url: string, resource_type: string }> => {
  return new Promise((resolve, reject) => {
    console.log('>> uploadToCloudinary')
    const uploadStream = cloudinary.uploader.upload_stream(
      { 
        resource_type: 'auto',
        folder, 
        public_id: Date.now().toString(),
      },
      (error, result) => {
        if (error) {
          reject(new Error('Error al subir el archivo a Cloudinary: ' + error.message));
        }
        if (result) {
          resolve(result);
        } else {
          reject(new Error('El resultado de la subida es undefined'));
        }
      }
    );

    uploadStream.end(buffer);
  });
};

export { cloudinary, uploadToCloudinary };

