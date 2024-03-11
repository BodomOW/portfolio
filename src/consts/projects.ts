export interface Project {
	id: string
	title: string
	cta: string
	url: string
}

export const PROJECTS: Project[] = [
    {
        id: "Nomi",
        title: "Nomi - Payroll Services",
        cta: "Visit website",
        url: "https://nomi.mx/"
    },
    {
        id: "MontesCorp",
        title: "Montes Corp",
        cta: "Visit website",
        url: "https://www.figma.com/file/eq9LJtDx4omKtaZ67fpLnN/Montes-Corp-Website?type=design&node-id=148%3A162&mode=design&t=TSUGjQ51v77Bz4nM-1"
    },
    {
        id: "FitimeStore",
        title: "Fitime Store",
        cta: "Visit project",
        url: "https://www.behance.net/gallery/117843071/UI-para-Web-Fitime-Store"
    },
]