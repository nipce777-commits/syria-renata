// Investim Packages (Minimum €100,000)
export interface InvestmentPackage {
    id: number;
    name: string;
    price: string;
    description: string;
    features: string[];
    impact: string;
    recommended: boolean;
}

export const investmentPackages: InvestmentPackage[] = [
    {
        id: 1,
        name: "FOUNDATION TIER",
        price: "€100,000",
        description: "Basic help for 50+ families for 1 year",
        features: [
            "Food aid for 1 year",
            "Basic clothing and medicine",
            "Report every 3 months",
            "Name on donor list",
            "Foundation certificate"
        ],
        impact: "Saves 50+ children from hunger",
        recommended: false
    },
    {
        id: 2,
        name: "IMPACT TIER",
        price: "€250,000",
        description: "Construction of school or small hospital",
        features: [
            "Construction of new facility",
            "Facility named after you",
            "Video report every month",
            "Virtual meeting with beneficiaries",
            "Memorial plaque on site"
        ],
        impact: "Education/healthcare for 500+ children",
        recommended: true
    }
];

// Real Projects in Syria
export interface Project {
    id: number;
    title: string;
    location: string;
    status: 'active' | 'completed' | 'planned';
    progress: number;
    budget: number;
    donor: string;
    impact: number;
    timeline: string;
    description: string;
    blockchainHash: string;
    gps: string;
    needsFunding: boolean;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "School 'LIGHT' in Aleppo",
        location: "Aleppo, Syria",
        status: "active",
        progress: 75,
        budget: 450000,
        donor: "Bill & Melinda Gates Foundation",
        impact: 500,
        timeline: "Jan 2024 - Jun 2024",
        description: "Construction of a new school for 500 children",
        blockchainHash: "0x8a3f9e2d1c7b5a4d9e8f7c6b5a4d3e2f1c0b9a8",
        gps: "36.2021, 37.1343",
        needsFunding: false
    },
    {
        id: 2,
        title: "Pediatric Hospital 'HEALTH'",
        location: "Damascus, Syria",
        status: "completed",
        progress: 100,
        budget: 2100000,
        donor: "Sheik Mohammed bin Rashid",
        impact: 1000,
        timeline: "Mar 2023 - Dec 2023",
        description: "New pediatric hospital with 50 beds",
        blockchainHash: "0x7b6c5d4e3f2a1b0c9d8e7f6c5b4a3d2e1f0c9b",
        gps: "33.5138, 36.2765",
        needsFunding: false
    }
];
