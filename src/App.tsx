import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { ProgramsServicesSection } from './components/ProgramsServicesSection';
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
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const [selectedPillar, setSelectedPillar] = useState<PillarItem | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<YouthProgramItem | null>(null);
  const [selectedModule, setSelectedModule] = useState<GrowthModuleItem | null>(null);
  const [selectedJournal, setSelectedJournal] = useState<YouthJournalItem | null>(null);
  const [selectedWork, setSelectedWork] = useState<YouthWorkItem | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#43C572] selection:text-[#1B5E3A] relative">
      {/* 1. Navbar */}
      <Navbar
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenCertCheck={() => setIsCertModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 3. Tentang AMI & 5 Nilai Inti */}
        <AboutSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 4. Pilar Gerak (5 Kolom dengan kode warna pilar) */}
        <PillarsSection
          onSelectPillar={(pillar) => setSelectedPillar(pillar)}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 5. Program & Layanan (Program AMI, Modul Tumbuh, Jurnal Muda, Karya AMI) */}
        <ProgramsServicesSection
          onSelectProgram={(prog) => setSelectedProgram(prog)}
          onSelectModule={(mod) => setSelectedModule(mod)}
          onSelectJournal={(journal) => setSelectedJournal(journal)}
          onSelectWork={(work) => setSelectedWork(work)}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 6. Statistik / Jejak Dampak (Counter Animasi, bukan 0) */}
        <ImpactSection />

        {/* 7. Testimoni Anggota Komunitas */}
        <TestimonialsSection />

        {/* 8. Keanggotaan & Sertifikasi (AMI ID, Validator, 3 Tingkatan) */}
        <MembershipAndCertSection
          onOpenCertCheck={() => setIsCertModalOpen(true)}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 9. Kemitraan (Didukung Oleh) */}
        <PartnersSection />

        {/* 10. CTA Bergabung (Hijau Tua, WhatsApp, Formulir) */}
        <CtaSection onOpenRegister={() => setIsRegisterOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer
        onOpenCertCheck={() => setIsCertModalOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Interactive Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <CertValidatorModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />

      <PillarDetailModal
        pillar={selectedPillar}
        onClose={() => setSelectedPillar(null)}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onOpenRegister={() => setIsRegisterOpen(true)}
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
