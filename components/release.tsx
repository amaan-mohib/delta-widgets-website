"use client";

import { IRelease } from "@/lib/types";
import { APP_NAME } from "@/lib/utils";
import {
  Button,
  Caption1,
  Card,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  Title1,
  tokens,
} from "@fluentui/react-components";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NextLink from "next/link";

interface ReleaseProps {
  release: IRelease;
  isLatest: boolean;
}

const ReleasePage: React.FC<ReleaseProps> = ({ release, isLatest }) => {
  const [locale, setLocale] = useState("en-US");

  useEffect(() => {
    setLocale(navigator.language);
  }, []);

  const setup = release.assets.find((i) => i.name.endsWith("-setup.exe"));

  return (
    <section className="relative py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-2">
        <Title1 as="h1">
          {APP_NAME} {release.tag_name || release.name}
        </Title1>
        <div className="md-body mt-5">
          <Markdown remarkPlugins={[remarkGfm]}>{release.body}</Markdown>
        </div>
        <div className="flex flex-col gap-2 my-5">
          <Card appearance="outline">
            <Text as="p">
              Get the Windows installer for this release. The correct version
              for your system architecture will be detected automatically.
            </Text>
            <div className="mt-2.5 flex items-center gap-2">
              <Button
                as="a"
                href={setup?.url}
                target="_blank"
                appearance="primary">
                Get {APP_NAME} {release.tag_name || release.name}
              </Button>
              {!isLatest && (
                <NextLink href="/releases/latest">
                  <Button>Get latest version</Button>
                </NextLink>
              )}
            </div>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
              Need a different file? All available assets are listed below.
            </Caption1>
          </Card>
        </div>
        <div className="flex flex-col gap-2">
          <Title1 as="h1">Assets</Title1>
          <Table className="mt-3">
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell align="right">Publish Date</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {release.assets.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Link href={item.url} className="wrap-break-word">
                      {item.name}
                    </Link>
                  </TableCell>
                  <TableCell align="right" suppressHydrationWarning>
                    {new Date(item.updated_at).toLocaleDateString(locale)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ReleasePage;
