"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site";

const interestOptions = [
  "报名参加活动",
  "成为同工志愿者",
  "成为代祷伙伴",
  "支持奉献",
  "其他咨询"
];

type FormState = {
  name: string;
  contact: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  contact: "",
  interest: interestOptions[0],
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  const mailtoHref = useMemo(() => {
    const subject = `【心火欧青联系】${form.interest} - ${form.name || "未署名"}`;
    const body = [
      "您好，",
      "",
      "我想进一步了解心火欧青。",
      "",
      `姓名：${form.name || "-"}`,
      `联系方式：${form.contact || "-"}`,
      `参与方式：${form.interest || "-"}`,
      "留言：",
      form.message || "-",
      "",
      "谢谢。"
    ].join("\n");

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form.contact, form.interest, form.message, form.name]);

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <form className="section-card space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">姓名</span>
          <input
            className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            onChange={(event) => handleChange("name", event.target.value)}
            placeholder="请输入你的名字"
            required
            value={form.name}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">联系方式</span>
          <input
            className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            onChange={(event) => handleChange("contact", event.target.value)}
            placeholder="邮箱 / 微信 / Telegram / 手机"
            required
            value={form.contact}
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-700">参与方式</span>
        <select
          className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
          onChange={(event) => handleChange("interest", event.target.value)}
          value={form.interest}
        >
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-700">留言</span>
        <textarea
          className="min-h-36 w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
          onChange={(event) => handleChange("message", event.target.value)}
          placeholder="告诉我们你的背景、期待或想参与的方向。"
          value={form.message}
        />
      </label>

      <div className="rounded-2xl bg-orange-50 px-4 py-3 text-sm leading-7 text-slate-600">
        点击按钮后会打开邮件客户端。你也可以直接写信到
        <span className="mx-1 rounded bg-white px-2 py-1 font-medium text-slate-900">
          {CONTACT_EMAIL}
        </span>
        与我们联系。
      </div>

      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:opacity-95"
        type="submit"
      >
        <Mail className="h-4 w-4" />
        打开邮件发送
      </button>
    </form>
  );
}
