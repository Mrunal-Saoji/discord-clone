"use client"

import { ServerWithMembersWithProfiles } from "@/types"
import { MemberRole } from "@prisma/client"


interface ServerheaderProps {
    server: ServerWithMembersWithProfiles
    role?: MemberRole
}

export const ServerHeader = ({
    server,
    role
}: ServerheaderProps) => {
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR
    return (
        <div>
            Server header!
        </div>
    )
}