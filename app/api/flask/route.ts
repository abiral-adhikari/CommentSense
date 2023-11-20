// // pages/api/user.ts
// import User from "@/lib/model/userDetail.model";
// import { connectToDB } from "@/lib/mongoose";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";

// const util = require("util");
// const exec = util.promisify(require("child_process").exec);
// export async function POST(request: {
//   json: () => PromiseLike<{ searchPrompt: any }> | { searchPrompt: any };
// }) {
//   // tmmmooomomry {
//   console.log(await request.json());
//   const { searchPrompt } = await request.json();

//   try {
//     const { stdout, stderr } = await exec("cd app");
//     console.log("Command executed successfully");
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);

//     // Send a response to the client
//     // res.status(200).json({ stdout, stderr });
//   } catch (error) {
//     console.error(`Error executing command: ${error}`);

//     // Handle the error and send an appropriate response to the client
//     // res.status(500).json({ error: `Failed to execute command: ${error.message}` });
//   }
// }
