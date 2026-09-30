#!/usr/bin/env python3
"""
Stellar Nexus - Lunar Exploration Site Selection Platform
Local Development & Demonstration Server
Smart India Hackathon 2026 (SIH26209)
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers for local testing
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 65)
        print("  STELLAR NEXUS - Lunar Exploration Site Selection Platform")
        print("  Smart India Hackathon 2026 (Problem Statement: SIH26209)")
        print("=" * 65)
        print(f"\n[+] Local Server running at: {url}")
        print(f"[+] Root directory: {DIRECTORY}")
        print("[+] Press Ctrl+C to stop the server.\n")
        
        try:
            webbrowser.open(url)
        except Exception:
            pass

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[-] Server stopped.")
            sys.exit(0)

if __name__ == '__main__':
    run_server()
