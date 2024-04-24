enum Title {
  CEO, // Chief Executive Officer
  CTO, // Chief Technology Officer
  Director, // Director
  Manager, // Manager
  Engineer, // Engineer
}

enum Country {
  USA, // United States of America
  UK, // United Kingdom
  Brazil, // Brazil
  Canada, // Canada
  Argentina, // Argentina
  Germany, // Germany
  Mexico, // Mexico
  Italy, // Italy
  Spain, // Spain
  India, // India
}
interface TitleJson {
  CEO: string;
  CTO: string;
  Director: string;
  Manager: string;
  Engineer: string;
  [key: string]: string; // This is the index signature
}
export const titleJson: TitleJson = {
  CEO: "Chief Executive Officer",
  CTO: "Chief Technology Officer",
  Director: "Director",
  Manager: "Manager",
  Engineer: "Engineer",
};

export const countryJson = {
  USA: "United States of America",
  UK: "United Kingdom",
  Brazil: "Brazil",
  Canada: "Canada",
  Argentina: "Argentina",
  Germany: "Germany",
  Mexico: "Mexico",
  Italy: "Italy",
  Spain: "Spain",
  India: "India",
};

export const titleOptions = Object.entries(titleJson).map(([value, label]) => ({
  value,
  label,
}));
export const countryOptions = Object.entries(countryJson).map(
  ([value, label]) => ({ value, label })
);

export interface IClient {
  id: number;
  title: Title;
  country: Country;
  name: string;
  email: string;
  phone: string;
  address: string;
  userId: number;
}
