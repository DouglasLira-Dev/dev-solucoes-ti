"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useTranslations } from "@/components/i18n/TranslationsProvider";

interface FormState {
  nome: string;
  email: string;
  mensagem: string;
  honeypot: string;
}

interface FieldError {
  campo: string;
  mensagem: string;
}

export function ContatoForm() {
  const t = useTranslations();
  const [formData, setFormData] = useState<FormState>({
    nome: "",
    email: "",
    mensagem: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
    errors?: FieldError[];
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.errors) {
      setStatus((prev) => ({
        ...prev,
        errors: prev.errors?.filter((err) => err.campo !== name),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || t.contato.form.sucesso,
        });
        setFormData({ nome: "", email: "", mensagem: "", honeypot: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || t.contato.form.erro,
          errors: data.errors || [],
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: t.contato.form.erro_conexao,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (campo: string): string | undefined => {
    return status.errors?.find((err) => err.campo === campo)?.mensagem;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="nome" className="block text-gray-300 text-sm mb-2">
          {t.contato.form.nome} <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          disabled={isSubmitting}
          className={`w-full bg-dark-surface border ${
            getFieldError("nome") ? "border-cyber-red" : "border-dark-border"
          } rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none transition-colors disabled:opacity-50`}
          placeholder={t.contato.form.placeholder_nome}
          required
        />
        {getFieldError("nome") && (
          <p className="text-cyber-red text-sm mt-1">{getFieldError("nome")}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
          {t.contato.form.email} <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className={`w-full bg-dark-surface border ${
            getFieldError("email") ? "border-cyber-red" : "border-dark-border"
          } rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none transition-colors disabled:opacity-50`}
          placeholder={t.contato.form.placeholder_email}
          required
        />
        {getFieldError("email") && (
          <p className="text-cyber-red text-sm mt-1">{getFieldError("email")}</p>
        )}
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-gray-300 text-sm mb-2">
          {t.contato.form.mensagem} <span className="text-primary">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          value={formData.mensagem}
          onChange={handleChange}
          disabled={isSubmitting}
          className={`w-full bg-dark-surface border ${
            getFieldError("mensagem") ? "border-cyber-red" : "border-dark-border"
          } rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none transition-colors resize-none disabled:opacity-50`}
          placeholder={t.contato.form.placeholder_mensagem}
          maxLength={1000}
          required
        />
        {getFieldError("mensagem") && (
          <p className="text-cyber-red text-sm mt-1">{getFieldError("mensagem")}</p>
        )}
        <p className="text-gray-500 text-xs mt-1">
          {formData.mensagem.length}/1000
        </p>
      </div>

      {status.type && (
        <div
          className={`p-4 rounded-lg flex items-start gap-3 ${
            status.type === "success"
              ? "bg-cyber-green/10 border border-cyber-green/30 text-cyber-green"
              : "bg-cyber-red/10 border border-cyber-red/30 text-cyber-red"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          )}
          <span className="text-sm">{status.message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-dark font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t.contato.form.enviando}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t.contato.form.enviar}
          </>
        )}
      </button>

      <p className="text-gray-500 text-xs text-center">
        {t.contato.form.seguro}
      </p>
    </form>
  );
}