"use client";

import { APP_NAME, DOCS_WEBSITE_URL } from "@/lib/utils";
import { GuideMeta } from "@/lib/guides";
import { Button } from "@fluentui/react-components";
import { Download, BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  meta: GuideMeta;
  body: string;
};

export default function GuidePage({ meta, body }: Props) {
  return (
    <article className="py-10 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/guides"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All guides
        </Link>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-primary font-medium">{meta.category}</span>
          <span>·</span>
          <span>{meta.readingTime}</span>
        </div>

        <div className="md-body mt-4">
          <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
          <Button
            as="a"
            appearance="primary"
            href="/download"
            icon={<Download className="h-4 w-4" />}>
            Download {APP_NAME}
          </Button>
          <Button
            as="a"
            appearance="secondary"
            href={DOCS_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            icon={<BookOpen className="h-4 w-4" />}>
            Read the docs
          </Button>
        </div>
      </div>
    </article>
  );
}
