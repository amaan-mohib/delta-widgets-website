"use client";

import { IRelease } from "@/lib/types";
import { APP_NAME } from "@/lib/utils";
import {
  Button,
  Card,
  Link,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  Title1,
} from "@fluentui/react-components";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NextLink from "next/link";
import { CheckCircleIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface ReleaseProps {
  release: IRelease;
  isLatest: boolean;
}

const ReleasePage: React.FC<ReleaseProps> = ({ release, isLatest }) => {
  const [locale, setLocale] = useState("en-US");
  const searchParams = useSearchParams();
  const isDownload = searchParams.get("download") === "true";
  const setup = release.assets.find((i) => i.name.endsWith("-setup.exe"));
  const version = release.tag_name || release.name;

  useEffect(() => {
    setLocale(navigator.language);
  }, []);

  useEffect(() => {
    if (!isDownload || !setup?.url) return;

    const timeout = setTimeout(() => {
      window.location.replace(setup.url);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isDownload]);

  return (
    <section className="relative py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-2">
        <Title1 as="h1">
          Download {APP_NAME} ({version})
        </Title1>
        <div className="flex flex-col gap-2 my-5">
          <Card appearance="outline" size="large">
            {isDownload && (
              <Text as="p">
                Your download should start automatically. If it doesn't, use the
                button below.
              </Text>
            )}
            <div className="pb-2.5 flex items-center gap-2">
              <Button
                as="a"
                href={setup?.url}
                size="large"
                target="_blank"
                appearance="primary">
                Download for Windows ({version})
              </Button>
              {!isLatest && (
                <NextLink href="/releases/latest">
                  <Button size="large">Get latest version</Button>
                </NextLink>
              )}
            </div>
            <List>
              {[
                <span>
                  Downloaded directly from{" "}
                  <Link href={release.url} target="_blank">
                    GitHub Releases
                  </Link>
                </span>,
                "Open source under GPL-3.0",
                "Windows 10 & Windows 11",
              ].map((item) => (
                <ListItem
                  className="flex items-center gap-2"
                  key={item.toString()}>
                  <CheckCircleIcon size={14} style={{ color: "green" }} />
                  {item}
                </ListItem>
              ))}
            </List>
            {!isDownload && (
              <Text as="p">
                The correct installer for your system architecture will be
                selected automatically.
              </Text>
            )}
          </Card>
        </div>
        <div className="flex flex-col gap-3 my-5">
          <Title1 as="h1">Release Notes</Title1>
          <div className="md-body">
            <Markdown remarkPlugins={[remarkGfm]}>{release.body}</Markdown>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Title1 as="h1">Assets</Title1>
          <Text>Need a different file? Browse all release assets below.</Text>
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
