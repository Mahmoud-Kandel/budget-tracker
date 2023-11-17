import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { colors } from "../../constants";

interface Series {
    series: {
        name: string;
        data: number[];
    }[];
}

export const Graph = (props: Series) => {
    const { series } = props;
    return (
        <Box
            p={4}
            flex={1}
            id='chart'
            display='flex'
            flexDirection='column'
            borderRadius='15px'
        >
            <Stack sx={{ mt: 10 }}>
                <Typography fontSize={18} fontWeight={600}>
                    Graph
                </Typography>
            </Stack>
            <ReactApexChart
                series={series}
                type='bar'
                height={310}
                options={{
                    chart: {
                        type: "bar",
                        toolbar: {
                            show: false,
                        },
                    },
                    colors: [colors.darkGreen, colors.lightRed],
                    plotOptions: {
                        bar: {
                            borderRadius: 4,
                            horizontal: false,
                            columnWidth: "55%",
                        },
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    grid: {
                        show: false,
                    },
                    xaxis: {
                        categories:
                            series[0].data.length > series[1].data.length
                                ? Array.from(
                                      { length: series[0].data.length },
                                      (_, i) => i + 1
                                  )
                                : Array.from(
                                      { length: series[1].data.length },
                                      (_, i) => i + 1
                                  ),
                        title: {
                            text: "# (number)",
                        },
                    },
                    yaxis: {
                        title: {
                            text: "$ (dollar)",
                        },
                    },
                    fill: {
                        opacity: 1,
                    },
                    legend: {
                        position: "top",
                        horizontalAlign: "right",
                    },
                    tooltip: {
                        y: {
                            formatter(val: number) {
                                return `$ ${val} dollar`;
                            },
                        },
                    },
                }}
            />
        </Box>
    );
};
