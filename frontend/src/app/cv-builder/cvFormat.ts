// CV / candidate information sheet format (履歴書・人材情報シート).
// Mirrors the company's Google Sheet template row-for-row so the generated CV
// matches what Japanese employers expect.

export type FieldType = "text" | "textarea" | "date" | "month" | "select" | "email" | "tel" | "number" | "photo";

export interface CvField {
  key: string;
  jp: string;
  en: string;
  type?: FieldType;
  options?: string[];
  placeholder?: string;
  /** Unit appended to the value in the preview (cm, kg…). */
  unit?: string;
  /** Spans the full form row. */
  wide?: boolean;
}

export interface CvGroup {
  /** Optional sub-heading inside a section, e.g. "Education 1". */
  title?: string;
  fields: CvField[];
}

export interface CvSection {
  id: string;
  jp: string;
  en: string;
  groups: CvGroup[];
}

const YES_NO = ["Yes", "No"];

const education = (n: number): CvGroup => ({
  title: `Education ${n}`,
  fields: [
    { key: `edu${n}Start`, jp: `学歴 ${n}：入学年月`, en: `Education ${n}: Start date`, type: "month" },
    { key: `edu${n}End`, jp: `学歴 ${n}：卒業年月`, en: `Education ${n}: Graduation date`, type: "month" },
    { key: `edu${n}Withdrew`, jp: "中退", en: "Did you withdraw before graduation? (Yes / No)", type: "select", options: YES_NO },
    { key: `edu${n}School`, jp: "学校名", en: `School name (Education ${n})` },
    { key: `edu${n}Major`, jp: "専攻・学習内容", en: `Major / field of study (Education ${n})`, wide: true },
  ],
});

const employment = (n: number): CvGroup => ({
  title: `Employment ${n}`,
  fields: [
    { key: `job${n}Start`, jp: `職務経歴 ${n}：入社日`, en: `Employment ${n}: Start date`, type: "month" },
    { key: `job${n}End`, jp: `職務経歴 ${n}：退社日`, en: `Employment ${n}: End date`, type: "month" },
    { key: `job${n}Current`, jp: "現在も勤務中", en: "Currently employed? (Yes / No)", type: "select", options: YES_NO },
    { key: `job${n}Employer`, jp: "勤務先名", en: `Employer name (Employment ${n})` },
    {
      key: `job${n}Type`,
      jp: "雇用形態",
      en: `Employment type (Employment ${n})`,
      type: "select",
      options: ["Full-time", "Part-time", "Contract", "Self-employed", "Internship"],
    },
    { key: `job${n}Duties`, jp: "勤務内容・業務内容", en: `Job duties / responsibilities (Employment ${n})`, type: "textarea", wide: true },
  ],
});

export const CV_TITLE_JP = "履 歴 書 ・ 人 材 情 報 シ ー ト";
export const CV_TITLE_EN = "CURRICULUM VITAE & CANDIDATE INFORMATION";

export const cvSections: CvSection[] = [
  {
    id: "basic",
    jp: "基本情報",
    en: "Basic Information",
    groups: [
      {
        fields: [
          { key: "photo", jp: "証明写真", en: "Photo", type: "photo", wide: true },
          { key: "fullName", jp: "氏名", en: "Full name", wide: true },
          { key: "katakana", jp: "カナ（変更・省略不可）", en: "Name in Katakana (must not be changed or abbreviated)", wide: true, placeholder: "例：モハマド ラーマン" },
          { key: "nickname", jp: "ニックネーム", en: "Nickname" },
          { key: "nationality", jp: "国籍", en: "Nationality", placeholder: "Bangladeshi" },
          { key: "gender", jp: "性別", en: "Gender", type: "select", options: ["Male", "Female"] },
          { key: "dob", jp: "生年月日", en: "Date of birth", type: "date" },
          { key: "marital", jp: "配偶者", en: "Marital status", type: "select", options: ["Single", "Married", "Divorced", "Widowed"] },
          { key: "family", jp: "家族構成", en: "Family Members", placeholder: "e.g. Father, Mother, 2 brothers" },
          { key: "religion", jp: "宗教", en: "Religion" },
          { key: "medical", jp: "病歴・持病", en: "Medical history / chronic conditions", placeholder: "None" },
          { key: "phone", jp: "電話番号", en: "Telephone number", type: "tel" },
          { key: "email", jp: "メールアドレス", en: "Email address", type: "email" },
          { key: "height", jp: "身長", en: "Height", type: "number", unit: "cm" },
          { key: "weight", jp: "体重", en: "Weight", type: "number", unit: "kg" },
          { key: "footSize", jp: "足のサイズ", en: "Foot size", type: "number", unit: "cm" },
          { key: "workPeriod", jp: "希望する就労年数", en: "Preferred period of employment", placeholder: "e.g. 5 Years" },
          { key: "jpStudy", jp: "日本語学習歴", en: "Japanese-language study", placeholder: "e.g. 1 Year 6 Months" },
          { key: "jpSchool", jp: "所属日本語学校", en: "Japanese-language school affiliation" },
        ],
      },
    ],
  },
  {
    id: "education",
    jp: "学歴",
    en: "Education History",
    groups: [education(1), education(2), education(3)],
  },
  {
    id: "employment",
    jp: "職務経歴",
    en: "Employment History",
    groups: [employment(1), employment(2)],
  },
  {
    id: "skills",
    jp: "特定技能・資格情報",
    en: "Specified Skilled Worker & Qualifications",
    groups: [
      {
        fields: [
          { key: "jlpt", jp: "日本語能力試験（JLPT）", en: "Japanese-Language Proficiency Test (JLPT) / JFT A2 Basic", wide: true, placeholder: "e.g. JLPT N4 (2025/07) / JFT A2 passed" },
          { key: "sswTest", jp: "特定技能評価試験 ①", en: "Specified Skilled Worker Skills Evaluation Test 1", wide: true, placeholder: "e.g. Nursing Care – passed 2025/09" },
          { key: "driving", jp: "運転免許", en: "Driving licence", wide: true, placeholder: "e.g. Bangladesh – Light vehicle / None" },
        ],
      },
    ],
  },
  {
    id: "passport",
    jp: "パスポート・来日情報",
    en: "Passport & Japan Travel Information",
    groups: [
      {
        fields: [
          { key: "passportNo", jp: "パスポート番号", en: "Passport number" },
          { key: "passportExpiry", jp: "パスポート有効期限", en: "Passport expiry date", type: "date" },
          { key: "birthCountry", jp: "出生国", en: "Country of birth", placeholder: "Bangladesh" },
          { key: "visitedJapan", jp: "来日経験", en: "Have you ever visited Japan?", type: "select", options: YES_NO },
          { key: "address", jp: "現住所", en: "Current residential address", type: "textarea", wide: true },
          { key: "coeIssued", jp: "在留資格認定証明書（COE）交付回数", en: "Number of COEs issued", type: "number" },
          { key: "coeRefused", jp: "COE不交付・拒否回数", en: "Number of COE refusals", type: "number" },
          { key: "familyInJapan", jp: "日本在住の家族", en: "Family members residing in Japan", wide: true, placeholder: "None" },
        ],
      },
    ],
  },
];

export type CvData = Record<string, string>;

/** Formats a stored value for the preview / PDF (dates as YYYY / MM / DD, units appended). */
export function displayValue(field: CvField, raw: string | undefined): string {
  const v = (raw ?? "").trim();
  if (!v) return "";
  if (field.type === "date" || field.type === "month") return v.split("-").join(" / ");
  if (field.unit) return `${v} ${field.unit}`;
  return v;
}
