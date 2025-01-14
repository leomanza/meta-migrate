import * as React from "react"
import { Grid, useTheme } from "@mui/material"
import { positions } from "@mui/system"

export default function TitleComponent(props: {
    title: string
    step?: number
}) {
    const theme = useTheme() as any
    return (
        <Grid
            item
            xs={1}
            sx={{
                display: "flex",
                alignItems: "center"
            }}
        >
            {props.step !== undefined ? (
                <h3
                    style={{
                        color: theme.palette.primary.main,
                        position: "absolute",
                        transform: "translateX(calc(-100% - 24px))",
                        verticalAlign: "baseline"
                    }}
                >
                    {`Step ${props.step}:`}
                </h3>
            ) : (
                <></>
            )}
            <h1>{props.title}</h1>
        </Grid>
    )
}
