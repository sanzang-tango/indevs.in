import { useState, useEffect } from "react";
import { subdomainAPI } from "@/lib/api";
import { Clock, Activity, Plus, RefreshCw, AlertCircle, Trash2, Settings, CheckCircle, Loader2, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function History() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await subdomainAPI.getActivity();
            setActivities(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getIcon = (type) => {
        switch (type) {
            case 'account_created':
                return { icon: User, color: "text-emerald-600 bg-emerald-50" };
            case 'login':
                return { icon: Activity, color: "text-cyan-600 bg-cyan-50" };
            case 'create':
            case 'registration':
                return { icon: Plus, color: "text-green-600 bg-green-50" };
            case 'renewal':
                return { icon: RefreshCw, color: "text-blue-600 bg-blue-50" };
            case 'soft_delete':
            case 'deletion_request':
                return { icon: Trash2, color: "text-red-600 bg-red-50" };
            case 'nameserver_update':
                return { icon: Settings, color: "text-amber-600 bg-amber-50" };
            case 'status_change':
                return { icon: AlertCircle, color: "text-purple-600 bg-purple-50" };
            default:
                return { icon: Activity, color: "text-gray-600 bg-gray-50" };
        }
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return date.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });
        }
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Pagination
    const totalPages = Math.ceil(activities.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentActivities = activities.slice(startIndex, endIndex);

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[#1A1A1A]">Account History</h1>
                    <p className="text-[#4A4A4A] mt-1">
                        {activities.length} {activities.length === 1 ? 'activity' : 'activities'} recorded
                    </p>
                </div>
                <Button
                    onClick={fetchActivities}
                    disabled={loading}
                    className="bg-[#1A1A1A] text-white hover:bg-[#333] font-bold"
                >
                    <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                    {loading ? 'Refreshing...' : 'Refresh'}
                </Button>
            </div>

            {loading && (
                <div className="flex items-center justify-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin text-[#1A1A1A]" />
                </div>
            )}

            {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
                    <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
                    <p className="text-red-900 font-bold">Failed to load history</p>
                    <p className="text-red-700 text-sm">{error}</p>
                </div>
            )}

            {!loading && !error && activities.length === 0 && (
                <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-12 text-center">
                    <Activity className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-bold text-lg mb-2">No Activity Yet</p>
                    <p className="text-gray-500 text-sm">Your account history will appear here.</p>
                </div>
            )}

            {!loading && !error && activities.length > 0 && (
                <>
                    {/* Compact Table View */}
                    <div className="bg-white border-2 border-[#E5E3DF] rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-[#FFF8F0] border-b-2 border-[#E5E3DF]">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-[#666] uppercase">Event</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-[#666] uppercase">Description</th>
                                    <th className="px-6 py-3 text-right text-xs font-bold text-[#666] uppercase">Date & Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E5E3DF]">
                                {currentActivities.map((activity, index) => {
                                    const { icon: Icon, color } = getIcon(activity.type);
                                    return (
                                        <tr key={index} className="hover:bg-[#FFF8F0] transition-colors">
                                            <td className="px-6 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-lg ${color}`}>
                                                        <Icon className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <p className="text-sm font-medium text-[#1A1A1A]">
                                                    {activity.description}
                                                </p>
                                                {activity.changes && activity.changes.before && activity.changes.after && (
                                                    <p className="text-xs text-[#666] mt-1">
                                                        {activity.changes.before} → {activity.changes.after}
                                                    </p>
                                                )}
                                            </td>
                                            <td className="px-6 py-3 text-right">
                                                <p className="text-sm font-medium text-[#1A1A1A]">
                                                    {formatDate(activity.timestamp)}
                                                </p>
                                                <p className="text-xs text-[#666]">
                                                    {formatTime(activity.timestamp)}
                                                </p>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm text-[#666]">
                                Showing {startIndex + 1}-{Math.min(endIndex, activities.length)} of {activities.length}
                            </p>
                            <div className="flex gap-2">
                                <Button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    variant="outline"
                                    size="sm"
                                    className="border-2"
                                >
                                    <ChevronLeft className="w-4 h-4 mr-1" />
                                    Previous
                                </Button>
                                <span className="px-4 py-2 text-sm font-bold">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <Button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    variant="outline"
                                    size="sm"
                                    className="border-2"
                                >
                                    Next
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
