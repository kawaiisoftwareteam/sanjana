from django.contrib.auth import authenticate
from django.db import connection
from django.http import HttpResponse
from django.utils import timezone
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import CandidateCV, Job
from .serializers import CandidateCVSerializer, JobSerializer


def backend_status_page(request):
    """Designed landing page at / confirming the backend API is connected and running."""
    db_ok = True
    db_error = ""
    try:
        connection.ensure_connection()
    except Exception as exc:
        db_ok = False
        db_error = str(exc)

    now = timezone.now().strftime("%Y-%m-%d %H:%M:%S UTC")
    db_badge_cls = "badge-ok" if db_ok else "badge-err"
    db_label = "Database Connected" if db_ok else f"Database Error: {db_error}"

    html = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sanjana HR — Backend Connected</title>
  <style>
    :root {{
      --bg: #0b1120;
      --card: #111827;
      --border: rgba(255,255,255,.08);
      --text: #f3f4f6;
      --muted: #9ca3af;
      --accent: #10b981;
      --crimson: #cc0a2f;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 24px;
      font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
      background:
        radial-gradient(600px circle at 15% 15%, rgba(204,10,47,.16), transparent 60%),
        radial-gradient(600px circle at 85% 85%, rgba(16,185,129,.14), transparent 60%),
        var(--bg);
      color: var(--text);
    }}
    .card {{
      width: 100%;
      max-width: 560px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 32px;
      box-shadow: 0 24px 60px rgba(0,0,0,.45);
    }}
    .top {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }}
    .brand {{
      font-size: 13px;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: #f87171;
    }}
    .status-pill {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      border-radius: 999px;
      background: rgba(16,185,129,.14);
      border: 1px solid rgba(16,185,129,.35);
      color: #6ee7b7;
      font-size: 13px;
      font-weight: 600;
    }}
    .dot {{
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 0 rgba(16,185,129,.7);
      animation: pulse 1.8s infinite;
    }}
    @keyframes pulse {{
      0% {{ box-shadow: 0 0 0 0 rgba(16,185,129,.7); }}
      70% {{ box-shadow: 0 0 0 8px rgba(16,185,129,0); }}
      100% {{ box-shadow: 0 0 0 0 rgba(16,185,129,0); }}
    }}
    h1 {{
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -.02em;
      margin-bottom: 8px;
    }}
    p.sub {{
      color: var(--muted);
      font-size: 15px;
      line-height: 1.55;
      margin-bottom: 24px;
    }}
    .grid {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }}
    .box {{
      background: rgba(255,255,255,.03);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 14px 16px;
    }}
    .box-label {{
      font-size: 12px;
      color: var(--muted);
      margin-bottom: 4px;
    }}
    .box-val {{
      font-size: 14px;
      font-weight: 600;
    }}
    .badge-ok {{ color: #6ee7b7; }}
    .badge-err {{ color: #fca5a5; }}
    .endpoints-title {{
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: .08em;
      color: var(--muted);
      margin-bottom: 10px;
      font-weight: 600;
    }}
    .endpoints {{
      display: flex;
      flex-direction: column;
      gap: 8px;
    }}
    .ep {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 14px;
      border-radius: 10px;
      background: rgba(255,255,255,.03);
      border: 1px solid var(--border);
      font-size: 13.5px;
      text-decoration: none;
      color: var(--text);
    }}
    .ep:hover {{ border-color: rgba(255,255,255,.22); }}
    .ep code {{
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      color: #93c5fd;
    }}
    .ep span {{ color: var(--muted); font-size: 12px; }}
  </style>
</head>
<body>
  <main class="card">
    <div class="top">
      <span class="brand">Sanjana HR Platform</span>
      <span class="status-pill"><span class="dot"></span> Backend Connected</span>
    </div>
    <h1>API Server is Online</h1>
    <p class="sub">
      The Django REST backend is active and ready to handle job listings, candidate CV submissions, and admin requests.
    </p>
    <div class="grid">
      <div class="box">
        <div class="box-label">Database Status</div>
        <div class="box-val {db_badge_cls}">{db_label}</div>
      </div>
      <div class="box">
        <div class="box-label">Server Time</div>
        <div class="box-val">{now}</div>
      </div>
    </div>
    <div class="endpoints-title">API Endpoints</div>
    <div class="endpoints">
      <a class="ep" href="/api/jobs/"><code>GET /api/jobs/</code><span>Public job listings</span></a>
      <div class="ep"><code>POST /api/cvs/</code><span>Save candidate CV (Admin only read/download)</span></div>
      <div class="ep"><code>POST /api/auth/login/</code><span>Admin token authentication</span></div>
      <a class="ep" href="/admin/"><code>/admin/</code><span>Django admin interface</span></a>
    </div>
  </main>
</body>
</html>"""
    return HttpResponse(html)


class JobViewSet(viewsets.ModelViewSet):
    """Public read access; create/update/delete need an admin token."""
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    def get_permissions(self):
        if self.action in ('list', 'retrieve'):
            return [AllowAny()]
        return super().get_permissions()


class CandidateCVViewSet(viewsets.ModelViewSet):
    """Anyone can submit/save a CV; only authenticated admins can list, view, or delete CVs."""
    queryset = CandidateCV.objects.all()
    serializer_class = CandidateCVSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return super().get_permissions()

    def perform_create(self, serializer):
        data = self.request.data.get('data') or {}
        if not isinstance(data, dict):
            data = {}
        full_name = self.request.data.get('full_name') or data.get('fullName', '')
        email = self.request.data.get('email') or data.get('email', '')
        phone = self.request.data.get('phone') or data.get('phone', '')
        serializer.save(
            full_name=str(full_name)[:200],
            email=str(email)[:200],
            phone=str(phone)[:100],
        )


class LoginView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]

    def post(self, request):
        user = authenticate(username=request.data.get('username'), password=request.data.get('password'))
        if not user or not user.is_staff:
            return Response({'detail': 'Invalid username or password'}, status=400)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})
