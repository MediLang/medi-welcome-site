
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CodeExample = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision for Medi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we envision Medi making healthcare programming more intuitive, safe, and efficient.
          </p>
          <div className="mt-3">
            <span className="inline-block px-3 py-1 bg-medi/10 text-medi text-sm rounded-full">
              Currently in Development
            </span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="data-privacy">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="data-privacy">Data Privacy</TabsTrigger>
              <TabsTrigger value="clinical-analysis">Clinical Analysis</TabsTrigger>
              <TabsTrigger value="ehr-integration">EHR Integration</TabsTrigger>
            </TabsList>
            
            <TabsContent value="data-privacy" className="rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-800 text-white p-6 font-mono text-sm">
                <div className="mb-3 text-gray-400 text-xs">Planned feature: Built-in PHI protection</div>
                <pre>
                  <code>
                    <span className="text-green-400">// Medi makes PHI handling secure by default</span>{'\n'}
                    <span className="text-blue-400">use</span> medi::hipaa;{'\n'}
                    {'\n'}
                    <span className="text-blue-400">struct</span> <span className="text-yellow-400">Patient</span> {'{'}{'\n'}
                    {'  '}name: <span className="text-purple-400">PHI</span>&lt;String&gt;,{'\n'}
                    {'  '}dob: <span className="text-purple-400">PHI</span>&lt;Date&gt;,{'\n'}
                    {'  '}mrn: <span className="text-purple-400">Identifier</span>,{'\n'}
                    {'}'}{'\n'}
                    {'\n'}
                    <span className="text-blue-400">fn</span> <span className="text-yellow-400">process_patient</span>(patient: <span className="text-yellow-400">Patient</span>) {'\n'}
                    {'{'}{'\n'}
                    {'  '}{'// PHI is automatically tracked and audited'}{'\n'}
                    {'  '}{'// Medi prevents accidental logging of PHI'}{'\n'}
                    {'  '}log::info("Processing patient {}", patient.mrn);{'\n'}
                    {'  '}{'\n'}
                    {'  '}{'// Requires explicit permission to access PHI'}{'\n'}
                    {'  '}<span className="text-blue-400">with_permission</span>(Permissions::ViewPHI) {'{'}{'  '}{'\n'}
                    {'    '}let name = patient.name.access();{'\n'}
                    {'    '}{'// Do something with the PHI...'}{'\n'}
                    {'  '}{'}'}{'  '}{'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
              <div className="bg-white p-6 border-t border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Protected Health Information Safeguards</h3>
                <p className="text-gray-700">
                  Medi's type system will enforce HIPAA compliance by tracking PHI through your program, preventing 
                  accidental exposure and ensuring proper authorization for sensitive data access.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="clinical-analysis" className="rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-800 text-white p-6 font-mono text-sm">
                <div className="mb-3 text-gray-400 text-xs">Planned feature: Medical units and clinical algorithms</div>
                <pre>
                  <code>
                    <span className="text-green-400">// Clinical risk scoring with built-in medical units</span>{'\n'}
                    <span className="text-blue-400">use</span> medi::clinical::scores;{'\n'}
                    <span className="text-blue-400">use</span> medi::units::*;{'\n'}
                    {'\n'}
                    <span className="text-blue-400">fn</span> <span className="text-yellow-400">calculate_heart_failure_risk</span>(patient: &Patient) -&gt; RiskScore {'\n'}
                    {'{'}{'\n'}
                    {'  '}{'// Values with medical units prevent errors'}{'\n'}
                    {'  '}let bp = patient.vitals.blood_pressure;{'\n'}
                    {'  '}let systolic: <span className="text-purple-400">Pressure</span>&lt;mmHg&gt; = bp.systolic;{'\n'}
                    {'  '}let weight: <span className="text-purple-400">Mass</span>&lt;kg&gt; = patient.vitals.weight;{'\n'}
                    {'  '}{'\n'}
                    {'  '}{'// Medi prevents unit mismatches at compile time'}{'\n'}
                    {'  '}let bmi = weight / (patient.height * patient.height);{'\n'}
                    {'  '}{'\n'}
                    {'  '}{'// Built-in validated clinical scoring algorithms'}{'\n'}
                    {'  '}scores::heart_failure::chads_vasc(patient){'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
              <div className="bg-white p-6 border-t border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Medical Units & Clinical Algorithms</h3>
                <p className="text-gray-700">
                  Medi will provide first-class support for medical units and validated clinical scoring systems, ensuring
                  accurate calculations and preventing common errors in medical software.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="ehr-integration" className="rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-800 text-white p-6 font-mono text-sm">
                <div className="mb-3 text-gray-400 text-xs">Planned feature: FHIR integration</div>
                <pre>
                  <code>
                    <span className="text-green-400">// Seamless EHR integration with FHIR</span>{'\n'}
                    <span className="text-blue-400">use</span> medi::interop::fhir;{'\n'}
                    <span className="text-blue-400">use</span> medi::ehr::connection;{'\n'}
                    {'\n'}
                    <span className="text-blue-400">async fn</span> <span className="text-yellow-400">retrieve_patient_data</span>(patient_id: &str) {'\n'}
                    {'{'}{'\n'}
                    {'  '}{'// Type-safe FHIR resources'}{'\n'}
                    {'  '}let ehr = connection::connect_to_ehr(EHR_CONFIG).await?;{'\n'}
                    {'  '}{'\n'}
                    {'  '}{'// Type-safe FHIR query building'}{'\n'}
                    {'  '}let query = fhir::Query::new(){'\n'}
                    {'    '}.resource(fhir::ResourceType::Patient){'\n'}
                    {'    '}.identifier(patient_id){'\n'}
                    {'    '}.include(fhir::ResourceType::Observation);{'\n'}
                    {'  '}{'\n'}
                    {'  '}{'// Results are properly typed FHIR resources'}{'\n'}
                    {'  '}let bundle: <span className="text-purple-400">fhir::Bundle</span> = ehr.execute(query).await?;{'\n'}
                    {'  '}{'\n'}
                    {'  '}{'// Process data with validation handled automatically'}{'\n'}
                    {'  '}for entry in bundle.entries() {'\n'}
                    {'    '}if let <span className="text-purple-400">fhir::Resource::Observation</span>(obs) = entry {'{'}{'  '}{'\n'}
                    {'      '}{'// Process observation with full type information'}{'\n'}
                    {'    '}{'}'}{'  '}{'\n'}
                    {'  '}{'}'}{'  '}{'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
              <div className="bg-white p-6 border-t border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Healthcare Standards Integration</h3>
                <p className="text-gray-700">
                  Medi will provide first-class support for healthcare interoperability standards like FHIR, HL7, and DICOM,
                  with type-safe interfaces that will make integration with existing systems straightforward and reliable.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
