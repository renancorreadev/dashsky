import { Sidebar } from "@/components/Sidebar";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";

import dynamic from "next/dynamic";

type Series = {
  name?: string;
  type?: string;
  color?: string;
  data:
    | (number | null)[]
    | {
        x: any;
        y: any;
        fillColor?: string;
        strokeColor?: string;
        meta?: any;
        goals?: any;
      }[]
    | [number, number | null][]
    | [number, (number | null)[]][];
}[];

/*Loading in Browser  */
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Dashboard() {
  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      foreColor: theme.colors.gray[400],
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
      },
      label: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          color: theme.colors.gray[600],
        },
        axisTicks: {
          color: theme.colors.gray[600],
        },
        categories: [
          "2021-03-18T00:00.0002",
          "2021-03-20T00:00.0002",
          "2021-03-22T00:00.0002",
          "2021-03-23T00:00.0002",
          "2021-03-26T00:00.0002",
          "2021-03-20T00:00.0002",
        ],
        fill: {
          opacity: 0.3,
          type: "gradient",
          gradient: {
            shade: "dark",
            opacityFrom: 0.7,
            opacityTo: 0.2,
          },
        },
      },
    },
  } as const;

  const series: Series = [
    {
      name: "series1",
      color: "#fff",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" pb="4" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
              <Chart
                type="area"
                height={160}
                options={options}
                series={series}
              />
            </Text>
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
              <Chart
                type="area"
                height={160}
                options={options}
                series={series}
              />
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
