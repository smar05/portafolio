export interface Iskills {
  backTitle: string;
  title: string;
  frontend: {
    title: string;
    data: { name: string; percentage: number; color: string }[];
  };
  backend: {
    title: string;
    data: { name: string; percentage: number; color: string }[];
  };
}
