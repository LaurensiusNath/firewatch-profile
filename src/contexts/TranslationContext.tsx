import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'id' | 'ja';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.training': 'Training Programs',
    'header.training.basic': 'Basic Fire Safety',
    'header.training.advanced': 'Advanced Rescue',
    'header.training.medical': 'Emergency Medical',
    'header.training.hazmat': 'Hazmat Response',
    'header.services': 'Services',
    'header.services.consulting': 'Safety Consulting',
    'header.services.certification': 'Certification Programs',
    'header.services.equipment': 'Equipment Training',
    'header.about': 'About',
    'header.contact': 'Contact',
    'header.phone': 'Phone',
    'header.email': 'Email',
    
    // Hero Section
    'hero.title': 'FIGHTING FOR THOSE ON',
    'hero.titleAccent': 'THE FRONTLINES',
    'hero.description': 'The Fire Training HSE Association represents one of the largest and most influential fire safety training organizations, advancing the rights and safety of firefighters across North America.',
    'hero.whoWeAre': 'WHO WE ARE',
    'hero.joinUs': 'JOIN US',
    'hero.stats.members': 'Professional Members',
    'hero.stats.affiliates': 'Affiliate Organizations',
    'hero.stats.population': 'Population Protected',
    
    // About Section
    'about.subtitle': 'OUR MISSION',
    'about.title': 'ADVANCING FIRE SAFETY EXCELLENCE',
    'about.description': 'For over a century, we have been at the forefront of fire safety training and education. Our commitment to excellence drives us to continuously improve our programs and support our members in protecting communities across North America.',
    'about.priorities.title': 'OUR PRIORITIES',
    'about.priorities.safety.title': 'Safety First',
    'about.priorities.safety.description': 'Ensuring the highest safety standards in all training programs and operations.',
    'about.priorities.training.title': 'Professional Training',
    'about.priorities.training.description': 'Providing world-class training programs for firefighters and emergency responders.',
    'about.priorities.advocacy.title': 'Member Advocacy',
    'about.priorities.advocacy.description': 'Fighting for the rights and benefits of our members and their families.',
  },
  id: {
    // Header
    'header.training': 'Program Pelatihan',
    'header.training.basic': 'Keselamatan Kebakaran Dasar',
    'header.training.advanced': 'Penyelamatan Lanjutan',
    'header.training.medical': 'Medis Darurat',
    'header.training.hazmat': 'Respon Bahan Berbahaya',
    'header.services': 'Layanan',
    'header.services.consulting': 'Konsultasi Keselamatan',
    'header.services.certification': 'Program Sertifikasi',
    'header.services.equipment': 'Pelatihan Peralatan',
    'header.about': 'Tentang',
    'header.contact': 'Kontak',
    'header.phone': 'Telepon',
    'header.email': 'Email',
    
    // Hero Section
    'hero.title': 'BERJUANG UNTUK MEREKA DI',
    'hero.titleAccent': 'GARIS DEPAN',
    'hero.description': 'Asosiasi Pelatihan HSE Kebakaran mewakili salah satu organisasi pelatihan keselamatan kebakaran terbesar dan paling berpengaruh, memajukan hak dan keselamatan petugas pemadam kebakaran di seluruh Amerika Utara.',
    'hero.whoWeAre': 'SIAPA KAMI',
    'hero.joinUs': 'BERGABUNG',
    'hero.stats.members': 'Anggota Profesional',
    'hero.stats.affiliates': 'Organisasi Afiliasi',
    'hero.stats.population': 'Populasi Terlindungi',
    
    // About Section
    'about.subtitle': 'MISI KAMI',
    'about.title': 'MEMAJUKAN KEUNGGULAN KESELAMATAN KEBAKARAN',
    'about.description': 'Selama lebih dari satu abad, kami telah berada di garis depan pelatihan dan pendidikan keselamatan kebakaran. Komitmen kami terhadap keunggulan mendorong kami untuk terus meningkatkan program dan mendukung anggota dalam melindungi komunitas di seluruh Amerika Utara.',
    'about.priorities.title': 'PRIORITAS KAMI',
    'about.priorities.safety.title': 'Keselamatan Utama',
    'about.priorities.safety.description': 'Memastikan standar keselamatan tertinggi dalam semua program pelatihan dan operasi.',
    'about.priorities.training.title': 'Pelatihan Profesional',
    'about.priorities.training.description': 'Menyediakan program pelatihan kelas dunia untuk petugas pemadam kebakaran dan responder darurat.',
    'about.priorities.advocacy.title': 'Advokasi Anggota',
    'about.priorities.advocacy.description': 'Memperjuangkan hak dan manfaat anggota serta keluarga mereka.',
  },
  ja: {
    // Header
    'header.training': '訓練プログラム',
    'header.training.basic': '基本消防安全',
    'header.training.advanced': '高度救助',
    'header.training.medical': '救急医療',
    'header.training.hazmat': '有害物質対応',
    'header.services': 'サービス',
    'header.services.consulting': '安全コンサルティング',
    'header.services.certification': '認定プログラム',
    'header.services.equipment': '機器トレーニング',
    'header.about': '概要',
    'header.contact': '連絡先',
    'header.phone': '電話',
    'header.email': 'メール',
    
    // Hero Section
    'hero.title': '最前線で戦う者たちのために',
    'hero.titleAccent': '立ち上がる',
    'hero.description': '消防訓練HSE協会は、北米全体で消防士の権利と安全を向上させる、最大かつ最も影響力のある消防安全訓練組織の一つです。',
    'hero.whoWeAre': '私たちについて',
    'hero.joinUs': '参加する',
    'hero.stats.members': 'プロメンバー',
    'hero.stats.affiliates': '提携組織',
    'hero.stats.population': '保護人口',
    
    // About Section
    'about.subtitle': '私たちの使命',
    'about.title': '消防安全の卓越性を向上させる',
    'about.description': '一世紀以上にわたり、私たちは消防安全訓練と教育の最前線に立ってきました。卓越性への私たちのコミットメントは、プログラムを継続的に改善し、北米全体のコミュニティを保護するメンバーをサポートすることを推進しています。',
    'about.priorities.title': '私たちの優先事項',
    'about.priorities.safety.title': '安全第一',
    'about.priorities.safety.description': 'すべての訓練プログラムと運営において最高の安全基準を確保する。',
    'about.priorities.training.title': 'プロフェッショナル訓練',
    'about.priorities.training.description': '消防士と緊急対応者向けの世界クラスの訓練プログラムを提供する。',
    'about.priorities.advocacy.title': 'メンバー擁護',
    'about.priorities.advocacy.description': 'メンバーとその家族の権利と利益のために戦う。',
  }
};

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};