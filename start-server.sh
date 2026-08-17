#!/bin/bash
# Quick Start Script for Portfolio
# Run this script from the portfolio directory

echo "=================================================="
echo "  Parin Dalwadi - Portfolio Server Starter"
echo "=================================================="
echo ""
echo "Starting local server on http://localhost:8080"
echo ""
echo "Portfolio Features:"
echo "  ✓ Real data from resume PDF"
echo "  ✓ Delta Air Lines experience"
echo "  ✓ Amazon.com experience"
echo "  ✓ NC State & VIT education"
echo "  ✓ 6 professional projects"
echo "  ✓ 25+ technical skills"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=================================================="
echo ""

# Start the server (suppress deprecation warnings)
NODE_NO_WARNINGS=1 npx -y http-server -p 8080 -a 127.0.0.1 -c-1
