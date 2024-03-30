import "dotenv/config";

import * as schema from "../db/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);
//@ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Resetleme başladı.");
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription);


        console.log("Resetleme bitti.")
    } catch (error) {
        console.log(error);
        throw new Error("Bir hata oluştu!");
    }
}

main();