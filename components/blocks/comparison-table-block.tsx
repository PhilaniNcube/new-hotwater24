import React from "react";
import Image from "next/image";
import SectionHeading from "../ui/section-heading";

interface ComparisonTableColumn {
  _type: "comparisonTableColumn";
  key: string;
  title: string;
  width?: "sm" | "md" | "lg" | "auto";
}

interface ComparisonTableRow {
  _type: "comparisonTableRow";
  brand: string;
  knownFor?: string;
  strengths?: string;
  priceRange?: string;
  bestFor?: string;
  image?: any;
  link?: string;
}

interface ComparisonTableBlockProps {
  data: {
    _type: "comparisonTableSection";
    heading?: string;
    headingTag?: "h1" | "h2" | "h3" | "h4";
    subheading?: string;
    columns?: ComparisonTableColumn[];
    tableData?: ComparisonTableRow[];
  };
}

const ComparisonTableBlock: React.FC<ComparisonTableBlockProps> = ({
  data,
}) => {
  const { heading, headingTag = "h2", subheading, columns, tableData } = data;

  if (!tableData || tableData.length === 0) {
    return null;
  }

  // Default columns if none provided
  const defaultColumns: ComparisonTableColumn[] = [
    {
      _type: "comparisonTableColumn",
      key: "brand",
      title: "Brand",
      width: "md",
    },
    {
      _type: "comparisonTableColumn",
      key: "knownFor",
      title: "Known For",
      width: "lg",
    },
    {
      _type: "comparisonTableColumn",
      key: "strengths",
      title: "Strengths",
      width: "lg",
    },
    {
      _type: "comparisonTableColumn",
      key: "priceRange",
      title: "Price Range",
      width: "sm",
    },
    {
      _type: "comparisonTableColumn",
      key: "bestFor",
      title: "Best For",
      width: "lg",
    },
  ];

  const columnsToUse = columns && columns.length > 0 ? columns : defaultColumns;

  const getColumnWidth = (width?: string) => {
    switch (width) {
      case "sm":
        return "w-24 md:w-32";
      case "md":
        return "w-32 md:w-48";
      case "lg":
        return "w-48 md:w-64";
      default:
        return "flex-1";
    }
  };

  const getCellValue = (row: ComparisonTableRow, columnKey: string) => {
    switch (columnKey) {
      case "brand":
        return row.brand;
      case "knownFor":
        return row.knownFor || "";
      case "strengths":
        return row.strengths || "";
      case "priceRange":
        return row.priceRange || "";
      case "bestFor":
        return row.bestFor || "";
      default:
        return "";
    }
  };

  function urlForImage(image: any): { url: () => string } | null {
    if (!image) return null;
    // If already a string (direct URL), wrap it
    if (typeof image === "string") {
      return { url: () => image };
    }
    // Sanity image object with asset url
    if (image.asset?.url) {
      return { url: () => image.asset.url };
    }
    // If some builders are used elsewhere, they might already have a url() function
    if (typeof image.url === "function") {
      return { url: () => image.url() };
    }
    return null;
  }

  return (
    <section className="py-8">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        {(heading || subheading) && (
          <div className="mb-8 text-center md:mb-12">
            {heading && (
              <SectionHeading
                heading={heading}
                className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl"
              />
            )}
            {subheading && (
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* Table Container */}
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
          <table className="w-full min-w-[800px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                {columnsToUse.map((column) => (
                  <th
                    key={column.key}
                    className={`px-4 md:px-6 py-4 text-left text-sm font-semibold text-gray-900 ${getColumnWidth(
                      column.width
                    )}`}
                  >
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className="transition-colors duration-150 hover:bg-gray-50"
                >
                  {columnsToUse.map((column) => (
                    <td
                      key={column.key}
                      className={`px-4 md:px-6 py-4 text-sm text-gray-700 ${getColumnWidth(
                        column.width
                      )}`}
                    >
                      {column.key === "brand" ? (
                        <div className="flex items-center space-x-3">
                          {row.image && (
                            <div className="flex-shrink-0">
                              <Image
                                src={urlForImage(row.image)?.url() || ""}
                                alt={row.brand}
                                width={40}
                                height={40}
                                className="object-contain rounded-lg"
                              />
                            </div>
                          )}
                          <div>
                            {row.link ? (
                              <a
                                href={row.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-blue-600 transition-colors hover:text-blue-800"
                              >
                                {row.brand}
                              </a>
                            ) : (
                              <span className="font-medium text-gray-900">
                                {row.brand}
                              </span>
                            )}
                          </div>
                        </div>
                      ) : column.key === "priceRange" ? (
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            row.priceRange === "Higher" ||
                            row.priceRange === "Premium"
                              ? "bg-red-100 text-red-800"
                              : row.priceRange === "Mid"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {getCellValue(row, column.key)}
                        </span>
                      ) : (
                        <span className="leading-relaxed">
                          {getCellValue(row, column.key)}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableBlock;
