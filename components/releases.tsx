"use client";

import { IReleases } from "@/lib/types";
import { APP_NAME } from "@/lib/utils";
import {
  Button,
  Caption1,
  Divider,
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
import { Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IProps {
  releases: IReleases;
}

const ReleasesPage: React.FC<IProps> = ({ releases: { releases, latest } }) => {
  const [locale, setLocale] = useState("en-US");

  useEffect(() => {
    setLocale(navigator.language);
  }, []);

  const name = latest.tag_name || latest.name;
  const data = Object.values(releases).sort(
    (a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
  );

  return (
    <section className="relative py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-2">
        <Title1 as="h1">Release History</Title1>
        <Text as="p" className="mt-5">
          For optimal performance, we recommend that you use the latest
          available version of {APP_NAME}. Previous releases are preserved for
          compatibility testing or rollback. Click any version or visit GitHub
          for full changelogs.
        </Text>
        <div className="my-3">
          <Divider />
        </div>
        <div>
          <Link href={`/releases/latest`}>
            <Button appearance="primary">Download Latest ({name})</Button>
          </Link>
        </div>
        <Caption1 as="p" style={{ color: tokens.colorNeutralForeground3 }}>
          In case you would like to use an older version, you can find it below
        </Caption1>
        <div className="my-3">
          <Divider />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Version</TableHeaderCell>
              <TableHeaderCell align="center">References</TableHeaderCell>
              <TableHeaderCell align="right">Publish Date</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link
                    href={`/releases/${item.tag_name || item.name}/`}
                    className="underline text-primary">
                    {item.tag_name || item.name}
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <a href={item.url} target="_blank" className="w-fit block">
                    <Github style={{ width: 20 }} />
                  </a>
                </TableCell>
                <TableCell align="right" suppressHydrationWarning>
                  {new Date(item.published_at).toLocaleDateString(locale)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default ReleasesPage;
