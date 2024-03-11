export interface Project {
	id: string
	title: string
	logo: string
	cta: string
	url: string
}

export const PROJECTS: Project[] = [
    {
        id: "Nomi",
        title: "Nomi - Payroll Services",
        logo: "./src/assets/projects/Logo=Nomi.png",
        cta: "Visit website",
        url: "https://nomi.mx/"
    },
    {
        id: "MontesCorp",
        title: "Montes Corp",
        logo: "./src/assets/projects/Logo=MontesCorp.png",
        cta: "Visit website",
        url: "https://www.figma.com/file/eq9LJtDx4omKtaZ67fpLnN/Montes-Corp-Website?type=design&node-id=148%3A162&mode=design&t=TSUGjQ51v77Bz4nM-1"
    },
    {
        id: "FitimeStore",
        title: "Fitime Store",
        logo: "./src/assets/projects/Logo=FitimeStore.png",
        cta: "Visit project",
        url: "https://www.behance.net/gallery/117843071/UI-para-Web-Fitime-Store"
    },
]