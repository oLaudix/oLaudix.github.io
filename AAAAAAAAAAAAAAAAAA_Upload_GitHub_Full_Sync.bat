@echo off
setlocal
cd /d "%~dp0"
if errorlevel 1 goto failed

echo ========================================
echo   Sync entire folder to GitHub
echo ========================================
echo.

git add -A
if errorlevel 1 goto failed

echo Changes to sync:
git --no-pager diff --cached --name-status
if errorlevel 1 goto failed
echo.

git diff --cached --quiet
if errorlevel 2 goto failed
if errorlevel 1 (
    git commit -m "Sync files"
    if errorlevel 1 goto failed
) else (
    echo No new local changes to commit.
)

git push
if errorlevel 1 goto failed

echo.
echo SUCCESS - GitHub is updated.
git status
goto finished

:failed
echo.
echo ERROR - Sync did not finish. See the message above.
echo Your local files have not been deleted by this script.

:finished
echo.
pause
