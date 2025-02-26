// app/page.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

export default function Certifcate() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="bg-white rounded-xl shadow-xl max-w-5xl w-full p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Certificado de Conclusão
          </h1>
          <p className="mt-2 text-gray-600">Emitido por Studio Spectrum</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <div
              className="cursor-pointer"
              onClick={() =>
                setModalImage("/certificado_isadora_parreiras.png")
              }
            >
              <Image
                src="/certificado_isadora_parreiras.png"
                alt="Certificado Isadora Parreiras"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium">Certificado</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="cursor-pointer"
              onClick={() => setModalImage("/conteudo.png")}
            >
              <Image
                src="/conteudo.png"
                alt="Agenda do Curso"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium">Agenda do Curso</p>
          </div>
        </div>
        <section className="text-gray-700 text-center mb-4">
          <p>
            Este certificado confirma que{" "}
            <em>Isadora Parreiras Gomes Soares </em>
            concluiu com êxito a oficina <em>FotoLab Criativo</em>, em 24 de
            fevereiro de 2025. Certifica que todos os módulos do curso estão
            marcados como “Concluídos” e que a duração total do curso
            corresponde ao tempo integral da oficina.
          </p>
        </section>
      </div>

      {/* Modal para exibição ampliada */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={modalImage}
              alt="Visualização Ampliada"
              width={1200}
              height={900}
              className="rounded-lg shadow-xl"
            />

            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white bg-gray-700 rounded-full p-2 hover:bg-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
