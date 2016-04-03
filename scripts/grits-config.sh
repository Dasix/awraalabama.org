#!/bin/bash

# Find scripts directory
SCRIPTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Load some common variables
source "$SCRIPTS_DIR/_vars.sh"

# Run Grits.js
run_grits "-w" "-n" "-c" "$PROJECT_DIR/conf/grits.conf.json"
