'use client';
import React from 'react';

const Sports = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-8 p-6 bg-accent rounded-3xl">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl mb-6">
          Extra-Curricular Activities
        </h2>
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="text-xl font-medium text-foreground">SANKALP & CAPRICCIO (LNMIIT)</h3>
            <p className="mt-2 text-sm md:text-base">Core member of SANKALP (Social Welfare Club) at LNMIIT; organized events and volunteered as an educator under the Mess Workers Education Program and Village Project, teaching literacy, numeracy, and life skills to 25+ mess workers and underprivileged children. Also active in CAPRICCIO (Music Club), contributing to campus cultural activities.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-foreground">Abacus Competitions</h3>
            <p className="mt-2 text-sm md:text-base">Secured 1st Prize at State-level (Rajasthan) and multiple awards at district and inter-school levels, demonstrating strong analytical and mental calculation skills.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-foreground">Sports</h3>
            <p className="mt-2 text-sm md:text-base">Badminton, Table Tennis, Volleyball & Cricket.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;