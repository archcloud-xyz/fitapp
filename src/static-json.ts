import express, { Request, Response, NextFunction, Express } from "express";
import path from "path";
import fs from "fs";

export function addStaticJson(app: Express) {
    app.get("*", (req: Request, res: Response, next: NextFunction) => {
        const requestedPath = req.path
        const filePath = path.join(__dirname, "..", "data", requestedPath) + ".json"

        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                if (err.code === "ENOENT") {
                    return res.status(404).send("Not found")
                }

                return next(err)
            }

            try {
                const jsonData = JSON.parse(data);
                res.json(jsonData)
            } catch (parseError) {
                res.status(500).send("Error parsing JSON");
            }
        })
    })
}

