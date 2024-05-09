"use server";

import { z } from "zod";
import { formSchema } from "../types/schemas";
import prisma from "../../lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postBBS = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });

  revalidatePath("/");

  redirect("/");
};
