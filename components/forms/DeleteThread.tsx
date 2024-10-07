"use client";

import { usePathname, useRouter } from "next/navigation";

import { deleteThread } from "@/lib/actions/thread.actions";
import { Trash2 } from '@geist-ui/icons';

interface Props {
  threadId: string;
  currentUserId: string;
  authorId: string;
  parentId: string | null;
  isComment?: boolean;
}

function DeleteThread({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  if (currentUserId !== authorId || pathname === "/") return null;

  return (
    <>
      <Trash2
        color='gray'
        size={18}
        className='cursor-pointer'
        onClick={
          async () => {
            await deleteThread(JSON.parse(threadId), pathname);
            if (!parentId || !isComment) {
              router.push("/");
            }
          }
        }
      />
    </>
  );
}

export default DeleteThread;