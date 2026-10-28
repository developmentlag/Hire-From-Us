'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Clock, 
  Wrench, 
  MapPin, 
  Users, 
  FileText, 
  Upload, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Loader2,
  FileCheck
} from 'lucide-react';
import { portalInfo } from '@/data/portalData';

interface FormProps {
  defaultRole?: string;
  defaultExperience?: string;
  defaultCandidateName?: string;
}

export default function EmployerEnquiryForm({ 
  defaultRole = '', 
  defaultExperience = '',
  defaultCandidateName = ''
}: FormProps) {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hiringRole, setHiringRole] = useState(defaultRole || 'Junior DevOps Engineer');
  const [experienceRequired, setExperienceRequired] = useState(defaultExperience || 'Fresher / Entry-Level (0-1 yr)');
  const [skillsRequired, setSkillsRequired] = useState('Linux, AWS, Docker, Kubernetes, CI/CD');
  const [location, setLocation] = useState('Mumbai / Navi Mumbai / Hybrid');
  const [openings, setOpenings] = useState('1 - 2 Openings');
  const [jdMode, setJdMode] = useState<'paste' | 'upload'>('paste');
  const [jdText, setJdText] = useState(defaultCandidateName ? `Requesting candidate profile and interview availability for: ${defaultCandidateName}` : '');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !contactPerson.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage('Please fill in Company Name, Contact Person, Email, and Phone number.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('companyName', companyName);
      formData.append('contactPerson', contactPerson);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('hiringRole', hiringRole);
      formData.append('experience', experienceRequired);
      formData.append('location', location);
      formData.append('openings', openings);
      formData.append('skills', skillsRequired);
      formData.append('jdText', jdText);
      if (uploadedFile) {
        formData.append('jdFile', uploadedFile);
      }

      const res = await fetch('/api/submit-hiring-request', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      if (typeof data.submissionId !== 'string' || !data.submissionId) {
        throw new Error('We could not confirm delivery. Please call the placement desk.');
      }
      setSubmissionId(data.submissionId);
      setIsSubmitted(true);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Network error occurred while submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCompanyName('');
    setContactPerson('');
    setEmail('');
    setPhone('');
    setJdText('');
    setUploadedFile(null);
  };

  return (
    <section id="enquiry-form" className="py-20 bg-gradient-to-b from-blue-50/70 via-white to-blue-50/50 relative scroll-mt-16">
      {/* Background visual elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Employer Shortlist Request</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Share Your Hiring Requirement
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Tell us about your opening. Our placement desk will follow up to discuss role fit and current candidate availability.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white rounded-3xl border border-blue-200 p-8 sm:p-12 shadow-xl shadow-blue-500/5 text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="inline-block bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
              Request Received • Reference ID: {submissionId}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Your Hiring Request Was Sent
            </h3>

            <p className="text-slate-600 text-base max-w-xl mx-auto mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{contactPerson}</span> from <span className="font-semibold text-slate-900">{companyName}</span>. 
              We sent your requirement for <span className="font-semibold text-blue-700">{hiringRole}</span> to the placement desk. The team will contact you to discuss the next steps and confirm current availability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-8">
              <div>
                <p className="text-xs text-slate-500 font-medium">Next step</p>
                <p className="text-sm font-bold text-slate-800">Placement desk follow-up</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Availability</p>
                <p className="text-sm font-bold text-blue-700">Confirmed directly</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Your email address</p>
                <p className="text-sm font-bold text-slate-800 truncate">{email}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors text-sm"
              >
                Submit Another Requirement
              </button>
              <a
                href={`https://wa.me/${portalInfo.whatsappNumber}?text=${encodeURIComponent(`Hello, I submitted a hiring requirement. Reference: ${submissionId}`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors text-sm shadow-md shadow-blue-500/20"
              >
                Message the Placement Desk
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-blue-200 p-6 sm:p-10 shadow-xl shadow-blue-500/5">
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                <p>{errorMessage}</p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  <a href={portalInfo.phoneTel} className="font-bold underline">Call {portalInfo.phone}</a>
                  <a href={`mailto:${portalInfo.email}`} className="font-bold underline">Email the placement desk</a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Company & Contact Person */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Company Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Jio Platforms, CloudNova Tech"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span>Contact Person *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Ankit Sharma (Engineering / TA Lead)"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Official Email *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Role & Experience Required */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                    <span>Hiring Role *</span>
                  </label>
                  <select
                    value={hiringRole}
                    onChange={(e) => setHiringRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors font-medium"
                  >
                    <optgroup label="Freshers / Entry-Level">
                      <option value="Junior DevOps Engineer">Junior DevOps Engineer</option>
                      <option value="Cloud Support Engineer">Cloud Support Engineer</option>
                      <option value="Monitoring Engineer">Monitoring Engineer</option>
                      <option value="NOC Engineer">NOC Engineer</option>
                      <option value="Linux Support Engineer">Linux Support Engineer</option>
                      <option value="L1 Infrastructure Support">L1 Infrastructure Support</option>
                    </optgroup>
                    <optgroup label="Experienced Talent">
                      <option value="DevOps Engineer (Mid / Senior)">DevOps Engineer</option>
                      <option value="Cloud Engineer (AWS / Azure)">Cloud Engineer</option>
                      <option value="Platform Engineer">Platform Engineer</option>
                      <option value="Site Reliability Engineer (SRE)">Site Reliability Engineer (SRE)</option>
                      <option value="Infrastructure Engineer">Infrastructure Engineer</option>
                      <option value="FDE / Production Support">FDE / Production Support</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Experience Required *</span>
                  </label>
                  <select
                    value={experienceRequired}
                    onChange={(e) => setExperienceRequired(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors font-medium"
                  >
                    <option value="Fresher / Entry-Level (0-1 yr)">Fresher / Entry-Level (0–1 yr)</option>
                    <option value="1 - 2 Years Experience">1 – 2 Years Experience</option>
                    <option value="2 - 3 Years Experience">2 – 3 Years Experience</option>
                    <option value="3 - 5 Years Experience">3 – 5 Years Experience</option>
                    <option value="5+ Years Senior Talent">5+ Years Senior Talent</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Skills Required & Openings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-blue-600" />
                    <span>Skills Required</span>
                  </label>
                  <input
                    type="text"
                    value={skillsRequired}
                    onChange={(e) => setSkillsRequired(e.target.value)}
                    placeholder="e.g. AWS, Linux, Terraform, Prometheus, Docker"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>Number of Openings</span>
                  </label>
                  <select
                    value={openings}
                    onChange={(e) => setOpenings(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors font-medium"
                  >
                    <option value="1 - 2 Openings">1 – 2 Openings</option>
                    <option value="3 - 5 Openings">3 – 5 Openings</option>
                    <option value="6 - 10 Openings">6 – 10 Openings</option>
                    <option value="10+ Bulk Hiring Drive">10+ Bulk Hiring Drive</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Job Location & Mode</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {['Mumbai / Hybrid', 'Navi Mumbai', 'Remote (Pan-India)', 'Pune / Bengaluru'].map((locOption) => (
                    <button
                      type="button"
                      key={locOption}
                      onClick={() => setLocation(locOption)}
                      className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all text-center ${
                        location === locOption
                          ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-sm'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {locOption}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 6: Upload JD or Paste JD */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>Job Description (JD)</span>
                  </label>
                  <div className="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-medium text-slate-600">
                    <button
                      type="button"
                      onClick={() => setJdMode('paste')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        jdMode === 'paste' ? 'bg-white text-blue-700 font-bold shadow-xs' : 'hover:text-slate-900'
                      }`}
                    >
                      Paste Text
                    </button>
                    <button
                      type="button"
                      onClick={() => setJdMode('upload')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        jdMode === 'upload' ? 'bg-white text-blue-700 font-bold shadow-xs' : 'hover:text-slate-900'
                      }`}
                    >
                      Upload File
                    </button>
                  </div>
                </div>

                {jdMode === 'paste' ? (
                  <textarea
                    rows={4}
                    value={jdText}
                    onChange={(e) => setJdText(e.target.value)}
                    placeholder="Paste job description, specific duties, preferred shifts (24x7 / general), or specific cloud certifications desired..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors"
                  />
                ) : (
                  <div className="border-2 border-dashed border-blue-200 hover:border-blue-400 rounded-2xl p-6 text-center bg-blue-50/30 transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                        {uploadedFile ? <FileCheck className="w-6 h-6 text-green-600" /> : <Upload className="w-6 h-6" />}
                      </div>
                      {uploadedFile ? (
                        <>
                          <p className="text-sm font-bold text-slate-800">{uploadedFile.name}</p>
                          <p className="text-xs text-slate-500">{(uploadedFile.size / 1024).toFixed(1)} KB • Click to replace file</p>
                        </>
                      ) : (
                        <>
                          <p className="text-sm font-semibold text-slate-700">Click or drag & drop JD file here</p>
                          <p className="text-xs text-slate-400 mt-1">Supports PDF, DOC, DOCX (Max 10MB)</p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-extrabold text-base tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending your request...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Shortlisted Profiles</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-4 mt-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    Zero Placement Fees
                  </span>
                  <span>•</span>
                  <span>Availability confirmed directly</span>
                  <span>•</span>
                  <span>Direct WhatsApp contact</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
