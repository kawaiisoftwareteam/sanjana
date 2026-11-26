import json
from pathlib import Path

from django.core.management.base import BaseCommand

from api.models import Job


class Command(BaseCommand):
    help = 'Import jobs from a JSON file (default: ../admin/data/jobs.json)'

    def add_arguments(self, parser):
        parser.add_argument('path', nargs='?', default=str(Path(__file__).resolve().parents[4] / 'admin/data/jobs.json'))

    def handle(self, *args, path, **opts):
        rows = json.loads(Path(path).read_text())
        for r in rows:
            r.pop('id', None)
            Job.objects.update_or_create(title=r['title'], city=r['city'], defaults=r)
        self.stdout.write(f'Imported {len(rows)} jobs')
