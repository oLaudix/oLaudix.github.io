@echo off
setlocal
cd /d "%~dp0"
if errorlevel 1 goto failed

echo ========================================
echo   Full GitHub Sync - Download + Upload
echo ========================================
echo.

rem This script is for the master branch of this repository.
for /f "delims=" %%B in ('git branch --show-current 2^>nul') do set "BRANCH=%%B"
if /I not "%BRANCH%"=="master" (
    echo ERROR - Expected branch master, but current branch is "%BRANCH%".
    goto failed
)

rem First commit local work, so pulling cannot overwrite uncommitted edits.
git add -A
if errorlevel 1 goto failed

echo Local changes to save:
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

echo.
echo ========================================
echo Downloading GitHub changes...
echo ========================================
echo.
rem Reapply local-only commits above GitHub's latest master commits.
git pull --rebase origin master
if errorlevel 1 goto pull_failed

echo.
echo ========================================
echo Uploading local changes...
echo ========================================
echo.
git push origin master
if errorlevel 1 goto failed

echo.
echo SUCCESS - Local folder and GitHub master are synchronized.
git status
goto finished

:pull_failed
echo.
echo ERROR - Git could not safely combine local and GitHub changes.
echo If there was a merge conflict, the in-progress rebase will be cancelled.
rem Return to the committed local state. Do not push anything on failure.
git rebase --abort >nul 2>&1
echo Local commits are preserved. Nothing has been pushed.
echo Read the conflict/error details above.
goto failed

:failed
echo.
echo ERROR - Sync did not finish. See the message above.
echo Your local commits have not been intentionally discarded.

:finished
echo.
pause
