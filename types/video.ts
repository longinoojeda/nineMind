export type Video = {
    video_id: number;
    titulo: string;
    descripcion: string | null;
    duracion: number; // Duración en segundos
    url_video: string;
    curso_id: number;
    es_trailer: boolean;
    fecha_subida: Date;
  };