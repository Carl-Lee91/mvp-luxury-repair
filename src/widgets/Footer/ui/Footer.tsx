"use client";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Luxury Repair</h3>
            <p className="text-sm text-muted-foreground">
              명품 제품의 완벽한 복원을 책임지는 플랫폼
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">고객 지원</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>이메일: support@luxuryrepair.com</li>
              <li>전화: 02-1234-5678</li>
              <li>운영시간: 평일 09:00 - 18:00</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">정보</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>환불정책</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Luxury Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
