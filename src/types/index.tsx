export interface ProjectListType {
  id: number;
  title: string;
  description: string;
  description02?: string;
  type: string;
  project?: {
    projectTitle: string;
    projectStack01: string;
    projectStack02: string;
    projectStack03: string;
    projectStack04: string;
    projectStack05?: string;
    mainImg01: string;
    mainImg02: string;
    projectConceptDesc01: string;
    projectConceptImg01: string;
    projectConceptDesc02: string;
    projectConceptImg02: string;
    projectProgressDesc01: string;
    projectProgressDescTitle01: string;
    projectProgressImg01_01: string;
    projectProgressImg01_02: string;
    projectProgressDesc02: string;
    projectProgressDescTitle02: string;
    projectProgressImg02_01: string;
    projectProgressImg02_02: string;
    projectProgressDesc03: string;
    projectProgressDescTitle03: string;
    projectProgressImg03_01: string;
    projectProgressImg03_02: string;
    projectProgressDesc04: string;
    projectProgressDescTitle04: string;
    projectProgressImg04_01: string;
    projectProgressImg04_02: string;
  };
}
