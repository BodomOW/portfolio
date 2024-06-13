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
        cta: "Website",
        url: "https://nomi.mx/"
    },
    {
        id: "MontesCorp",
        title: "Montes Corp",
        cta: "Demo",
        url: "https://montes-corp.vercel.app/"
    },
    {
        id: "FitimeStore",
        title: "Fitime Store",
        cta: "Design",
        url: "https://www.behance.net/gallery/117843071/UI-para-Web-Fitime-Store"
    },
]