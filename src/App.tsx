import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { ProgramsServicesSection } from './components/ProgramsServicesSection';
import { CommunitySection } from './components/CommunitySection';
import { NewsSection } from './components/NewsSection';
import { ImpactSection } from './components/ImpactSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MembershipAndCertSection } from './components/MembershipAndCertSection';
import { PartnersSection } from './components/PartnersSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

// Modals
import { RegisterModal } from './components/RegisterModal';
import { CertValidatorModal } from './components/CertValidatorModal';
import { PillarDetailModal } from './components/PillarDetailModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { ModuleDownloadModal } from './components/ModuleDownloadModal';
import { JournalDetailModal } from './components/JournalDetailModal';
import { WorkDetailModal } from './components/WorkDetailModal';

// Types
import {
  PillarItem,
  YouthProgramItem,
  GrowthModuleItem,
  YouthJournalItem,
  YouthWorkItem,
} from './types';

export default function App() {
  // Modal states
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerProgram, setRegisterProgram] = useState<YouthProgramItem | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const [selectedPillar, setSelectedPillar] = useState<PillarItem | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<YouthProgramItem | null>(null);
  const [selectedModule, setSelectedModule] = useState<GrowthModuleItem | null>(null);
  const [selectedJournal, setSelectedJournal] = useState<YouthJournalItem | null>(null);
  const [selectedWork, setSelectedWork] = useState<YouthWorkItem | null>(null);

  const handleOpenRegister = (program?: YouthProgramItem) => {
    setRegisterProgram(program || null);
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#43C572] selection:text-[#1B5E3A] relative">
      {/* 1. Navbar */}
      <Navbar
        onOpenRegister={() => handleOpenRegister()}
        onOpenCertCheck={() => setIsCertModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection onOpenRegister={() => handleOpenRegister()} />

        {/* 3. Tentang AMI & 5 Nilai Inti */}
        <AboutSection onOpenRegister={() => handleOpenRegister()} />

        {/* 4. Pilar Gerak (5 Kolom dengan kode warna pilar & banner transisi ke program) */}
        <PillarsSection
          onSelectPillar={(pillar) => setSelectedPillar(pillar)}
          onOpenRegister={() => handleOpenRegister()}
        />

        {/* 5. Program & Layanan (Program AMI, Modul Tumbuh, Jurnal Muda, Karya AMI) */}
        <ProgramsServicesSection
          onSelectProgram={(prog) => setSelectedProgram(prog)}
          onSelectModule={(mod) => setSelectedModule(mod)}
          onSelectJournal={(journal) => setSelectedJournal(journal)}
          onSelectWork={(work) => setSelectedWork(work)}
          onOpenRegister={(prog) => handleOpenRegister(prog)}
        />

        {/* 6. Komunitas AMI (Jejaring Daerah & Alur Menjadi Anggota) */}
        <CommunitySection />

        {/* 7. Kabar AMI (Berita Terkini & Saluran WhatsApp) */}
        <NewsSection />

        {/* 8. Statistik / Jejak Dampak (Counter Angka Terverifikasi) */}
        <ImpactSection />

        {/* 9. Testimoni Anggota Komunitas ("Kata Mereka yang Sudah Ikut Program AMI") */}
        <TestimonialsSection />

        {/* 10. Keanggotaan & Sertifikasi (AMI ID, Validator, 3 Tingkatan Usai Program) */}
        <MembershipAndCertSection
          onOpenCertCheck={() => setIsCertModalOpen(true)}
          onOpenRegister={() => handleOpenRegister()}
        />

        {/* 11. Kemitraan (Didukung Oleh) */}
        <PartnersSection />

        {/* 12. CTA Penutup (WhatsApp & Link Program) */}
        <CtaSection onOpenRegister={() => handleOpenRegister()} />
      </main>

      {/* 13. Footer */}
      <Footer
        onOpenCertCheck={() => setIsCertModalOpen(true)}
        onOpenRegister={() => handleOpenRegister()}
      />

      {/* Interactive Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => {
          setIsRegisterOpen(false);
          setRegisterProgram(null);
        }}
        selectedProgram={registerProgram}
      />

      <CertValidatorModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />

      <PillarDetailModal
        pillar={selectedPillar}
        onClose={() => setSelectedPillar(null)}
        onOpenRegister={() => handleOpenRegister()}
      />

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onOpenRegister={(prog) => handleOpenRegister(prog)}
      />

      <ModuleDownloadModal
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
      />

      <JournalDetailModal
        journal={selectedJournal}
        onClose={() => setSelectedJournal(null)}
      />

      <WorkDetailModal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </div>
  );
}
