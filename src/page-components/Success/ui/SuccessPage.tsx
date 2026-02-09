"use client";

import Link from "next/link";
import { CheckCircle2, Home } from "lucide-react";
import { Button } from "@/src/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/ui/card";

export function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <Card className="max-w-md w-full shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold">
            견적 신청이 완료되었습니다!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-muted-foreground">
            24시간 이내에 전문가가 견적을 검토하고 연락드리겠습니다.
            <br />
            입력하신 연락처로 상세한 견적서를 전송해드릴 예정입니다.
          </p>

          <div className="pt-4 space-y-2">
            <p className="text-sm font-medium">다음 단계</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ 전문가가 사진 및 내용을 검토합니다</li>
              <li>✓ 정확한 견적서를 작성합니다</li>
              <li>✓ 연락처로 견적서를 전송합니다</li>
            </ul>
          </div>

          <Link href="/" className="block pt-4">
            <Button className="w-full">
              <Home className="mr-2 w-4 h-4" />
              홈으로 돌아가기
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
