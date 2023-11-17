import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface PieChartProps {
    title: string;
    value: number;
    series: Array<number>;
    labels: Array<string>;
    colors: Array<string>;
}

export const PieChart = ({
    title,
    value,
    series,
    colors,
    labels,
}: PieChartProps) => {
    return (
        <Box
            id='chart'
            flex={1}
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
            pl={3.5}
            py={2}
            gap={2}
            borderRadius='15px'
            minHeight='110px'
            width='fit-content'
        >
            <Stack direction='column'>
                <Typography fontSize={14}>{title}</Typography>
                <Typography fontSize={24} fontWeight={700} mt={1}>
                    &#36;{" "}
                    {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Typography>
            </Stack>

            <ReactApexChart
                options={{
                    chart: { type: "donut" },
                    colors,
                    labels,
                    legend: { show: false },
                    dataLabels: { enabled: false },
                }}
                series={series}
                type='donut'
                width='120px'
            />
        </Box>
    );
};
